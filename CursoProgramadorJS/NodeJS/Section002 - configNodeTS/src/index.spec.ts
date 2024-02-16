import { data } from './index';

describe("File Jest - Test", ()=> {
    test("Test", () => {
        expect(1).toBe(1);
    });
    
    test("Test", () => {
        expect(data).toBe("Neres");
    });

})