import {getMonth} from "../../utils/index.js";


describe('month test', ()=> {
    it('test month (1-12)',()=>{
let result = getMonth(5)
        expect(result).toBe("May")
    })
    it('test month ( < 1 && > 12)',()=>{
let result = getMonth(0)
        expect(result).toBe(undefined)
    })
    it('test month with fraction of a number',()=>{
let result = getMonth(6.5)
        expect(result).toBe(undefined)
    })
    it('test month with empty of number',()=>{
let result = getMonth("")
        expect(result).toBe(undefined)
    })
    it('test month with other symbols',()=>{
let result = getMonth(ABC)
        expect(result).toBe(undefined)
    })
})