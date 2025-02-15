import OptionsBoard from "./OptionsBoard";
import { TextInput, SwitchInput, RangeInput } from "./InputTypes";
import ResetButton from "./ResetFormButton";
import StartButton from "./StartButton";

const SetupForm = ({ submitFunction, resetFunction }: any) => {
    return (
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 justify-center max-h-[75vh] md:max-h-full px-4 py-2 overflow-auto lg:overflow-hidden">
                <OptionsBoard BoardHeader="Indexer">
                    <div className="flex justify-around">
                        <SwitchInput SwitchName="instantRecoveryState" defaultChecked>
                            Instant Recovery
                        </SwitchInput>
                        <SwitchInput SwitchName="instantRecoverySynchronous">
                            Synchronous
                        </SwitchInput>
                    </div>
                    <TextInput
                        TextName="aofFilename"
                        TextPlaceholder="arquivo.aof"
                        value="logs/sequentialLog.aof"
                    >
                        AOF filename
                    </TextInput>
                    <TextInput
                        TextName="indexedlogFilename"
                        TextPlaceholder="arquivo.txt"
                        value="logs/indexedLog.db"
                    >
                        indexed log filename
                    </TextInput>
                    <RangeInput RangeName="indexerTimeInterval" RangeDefault={500}>
                        Time interval
                    </RangeInput>
                </OptionsBoard>

                <OptionsBoard BoardHeader="Checkpointer">
                    <div className="flex justify-around">
                        <SwitchInput SwitchName="checkpointState">
                            Checkpoint
                        </SwitchInput>
                        <SwitchInput SwitchName="checkpointsOnlyMfu">
                            Only MFU
                        </SwitchInput>
                    </div>
                    <RangeInput RangeName="numberCheckpoints">
                        Checkpoints quantity
                    </RangeInput>
                    <RangeInput RangeName="checkpointTimeInterval">
                        Time interval
                    </RangeInput>
                    <SwitchInput SwitchName="selftuneCheckpointTimeInterval">
                        Self tune time interval
                    </SwitchInput>
                </OptionsBoard>

                <OptionsBoard BoardHeader="Failure simulation">
                    <RangeInput RangeName="restartDaleyTime">
                        Restart delay time
                    </RangeInput>
                    <RangeInput RangeName="restartAfterTime">
                        Restart after time
                    </RangeInput>
                    <RangeInput RangeName="numberRestartsAfterTime">
                        Restarts after time
                    </RangeInput>
                    <RangeInput RangeName="preloadDatabaseAndRestart">
                        Preload database
                    </RangeInput>
                    <RangeInput RangeName="numberRestartsAfterPreloading">
                        Restarts after preloading
                    </RangeInput>
                </OptionsBoard>

                <OptionsBoard BoardHeader="Memtier Benchmark">
                    <div className="flex justify-around">
                        <SwitchInput SwitchName="memtierBenchmarkState">
                            Memtier Benchmark
                        </SwitchInput>
                    </div>
                    <TextInput
                        TextName="memtierBenchmarkParameters"
                        TextPlaceholder="--hide-histogram -n 5000 ..."
                        value=" --hide-histogram -n 5000 --key-prefix='redisIR-' --key-minimum=1 --key-maximum=5000 --command='set  __key__ __data__' --command-ratio=5000 --command-key-pattern=S"
                    >
                        Parameters
                    </TextInput>
                    <RangeInput RangeName="timeTostopBenchmarking">
                        Time to stop
                    </RangeInput>
                </OptionsBoard>

                <OptionsBoard BoardHeader="Report">
                    <div className="flex justify-around">
                        <SwitchInput SwitchName="generateRecoveryReport">
                            Recovery
                        </SwitchInput>
                    </div>
                    <TextInput
                        TextName="recoveryReportFilename"
                        TextPlaceholder="arquivo.txt"
                        value="recovery_report/recovery_report.txt"
                    >
                        Recovery filename
                    </TextInput>

                    <div className="flex justify-around">
                        <SwitchInput SwitchName="generateExecutedCommandsCsv">
                            Executed commands
                        </SwitchInput>
                    </div>
                    <TextInput
                        TextName="executedCommandsCsvFilename"
                        TextPlaceholder="arquivo.csv"
                        value="datasets/datasets.csv"
                    >
                        Executed commands filename
                    </TextInput>

                    <div className="flex justify-around">
                        <SwitchInput SwitchName="generateIndexingReportCsv">
                            Indexing
                        </SwitchInput>
                    </div>
                    <TextInput
                        TextName="indexingReportCsvFilename"
                        TextPlaceholder="arquivo.csv"
                        value="indexing_report/indexing.csv"
                    >
                        Indexing filename
                    </TextInput>
                    <div className="flex justify-around">
                        <SwitchInput SwitchName="overwriteReportFiles">
                            Overwrite
                        </SwitchInput>
                    </div>
                </OptionsBoard>

                <OptionsBoard BoardHeader="System monitoring">
                    <div className="flex justify-around flex-wrap gap-2">
                        <SwitchInput SwitchName="systemMonitoring">
                            System monitoring
                        </SwitchInput>
                        <SwitchInput SwitchName="stopSystemMonitoringEndBenchmark">
                            Stop after Benchmark finish
                        </SwitchInput>
                    </div>
                    <TextInput
                        TextName="systemMonitoringCsvFilename"
                        TextPlaceholder="arquivo.csv"
                        value="system_monitoring/system_monitoring.csv"
                    >
                        Filename
                    </TextInput>
                    <RangeInput RangeName="systemMonitoringTimeInterval">
                        Time interval
                    </RangeInput>
                    <div className="flex justify-around flex-wrap gap-1">
                        <SwitchInput SwitchName="overwriteSystemMonitoring">
                            Overwrite
                        </SwitchInput>
                    </div>
                </OptionsBoard>
            </div>
            <div className="flex flex-row justify-center gap-3 mt-3 px-4 pb-3 flex-wrap">
                <ResetButton onResetButtonClick={resetFunction} />
                <StartButton onClickButton={submitFunction} />
            </div>

        </form>
    )
}

export default SetupForm;