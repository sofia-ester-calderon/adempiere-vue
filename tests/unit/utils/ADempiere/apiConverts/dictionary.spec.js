import { convertProcess } from '../../../../../src/utils/ADempiere/apiConverts/dictionary';
import process from './objects/process.json'
import convertedProcess from './objects/process_converted.json'
import processWithUndefined from './objects/processWithUndefined.json'
import convertedProcessWithUndefined from './objects/processWithUndefined_converted.json'

it('should convert a process with all fields defined', () => {
    const actualConvertedProcess = convertProcess(process)

    expect(actualConvertedProcess).toEqual(convertedProcess)
})

it('should convert a process with some fields undefined', () => {
    const actualConvertedProcess = convertProcess(processWithUndefined)

    expect(actualConvertedProcess).toEqual(convertedProcessWithUndefined)
})