const { camelizeObjectEntries } = require("@/utils/ADempiere/camelize")
const { uuids } = require("../../uuids")


describe('given an object is passed', () => {
    it('should camelize all snake case object entries', () => {
        const obj = {
            "menu_uuid": uuids[0],
            "menu_name": "Menu Name",
        }
        camelizeObjectEntries(obj)
    
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
        camelizeObjectEntries(obj)

        expect(obj.menuName).toBe('Menu Name')
        expect(obj.menuItem).toBe("Menu Item")
        expect(obj.something).toBe('else')
    })

    it('should return empty object if object is empty', () => {
        const obj = {}
        camelizeObjectEntries(obj)

        expect(obj).toBeDefined()
    })
})
