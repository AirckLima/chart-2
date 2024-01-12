import SetupForm from "./SetupForm";

interface FormProp {
    initServer: (params: Array<string>) => void;
}

const SetupPanel = ({ initServer }: FormProp) => {
    function onSubmitButtonPressed(e: any) {
        e.preventDefault();

        const form = e.target.form;
        const formData = new FormData(form);
        const request: any = {}

        formData.forEach(function (value, key) {
            request[key] = value;
        })

        const postRequest = fetch("http://localhost:8081/config", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        postRequest.then((resp: any) => {
            // iniciar conexão websocket
        })
    }

    function ResetFunction(e: any) {
        e.preventDefault();

        const form = e.target.form;

        const reset = confirm('All options will reset to their initial values. Continue?');

        if (reset) form.reset();
        let ResetEvent = new Event("reset");
        console.log(ResetEvent.target);

        dispatchEvent(ResetEvent)
    }

    return (
        <div className="grid container mx-auto my-8 justify-center ">
            <div className="flex w-[90vw] bg-my_blue rounded-t py-3 px-4 justify-center">
                <h2 className="text-2xl text-slate-100">Setup</h2>
            </div>
            <div className="w-[90vw] bg-slate-200 rounded-b">
                <SetupForm
                    submitFunction={onSubmitButtonPressed}
                    resetFunction={ResetFunction}
                />
            </div>
        </div>
    );
};

export default SetupPanel;
