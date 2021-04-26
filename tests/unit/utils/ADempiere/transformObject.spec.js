const { camelizeObjectKeys, renameObjectKey } = require("@/utils/ADempiere/transformObject")
const { uuids } = require("../../uuids")


describe('given an object is camelized', () => {
    it('should camelize all snake case object entries', () => {
        const obj = {
            "menu_uuid": uuids[0],
            "menu_name": "Menu Name",
        }
        camelizeObjectKeys(obj)
    
        expect(obj.menuUuid).toBe(uuids[0])
        expect(obj.menuName).toBe('Menu Name')
        expect(obj.menu_uuid).toBeUndefined()
        expect(obj.menu_name).toBeUndefined()
    })
    
    it('should ignore all entires that are not snake case', () => {
        const obj = {
            "menu_name": "Menu Name",
            "menuItem": "Menu Item",
            "something": "else",
        }
        camelizeObjectKeys(obj)

        expect(obj.menuName).toBe('Menu Name')
        expect(obj.menuItem).toBe("Menu Item")
        expect(obj.something).toBe('else')
    })

    it('should return empty object if object is empty', () => {
        const obj = {}
        camelizeObjectKeys(obj)

        expect(obj).toBeDefined()
    })
})

describe('given an object key is renamed', () => {
    it('should only rename the passed key', () => {
        const obj = {
            "key1": 'value for key',
            'permanentKey': 'permanent value'
        }
        renameObjectKey(obj, 'key1', 'key2')

        expect(obj.key2).toBe('value for key')
        expect(obj.permanentKey).toBe('permanent value')
        expect(obj.key1).toBeUndefined()
    })

    it('should not change anything if old key does not exist', () => {
        const obj = {
            "key1": 'key1 value',
            'key2': 'key2 value'
        }
        renameObjectKey(obj, 'key3', 'key4')

        expect(obj.key1).toBe('key1 value')
        expect(obj.key2).toBe('key2 value')
        expect(obj.key4).toBeUndefined()
    })

    it('should rename if new key already exists in object', () => {
        const obj = {
            "key1": 'key1 value',
            'key2': 'key2 value'
        }
        renameObjectKey(obj, 'key1', 'key2')

        expect(obj.key1).toBeUndefined()
        expect(obj.key2).toBe('key1 value')
    })
})