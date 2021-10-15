import * as CreateOrderService from "@modules/orders/services/CreateOrderService"

// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new CreateOrderService.default({}, {}, {})
    })

    test("0", async () => {
        let object: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 1 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: 100 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: -100 }]
        await inst.execute({ customer_id: 9876, products: object })
    })

    test("1", async () => {
        let object: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: -5.48 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: -100 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: -100 }]
        await inst.execute({ customer_id: 9876, products: object })
    })

    test("2", async () => {
        let object: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: 100 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 1 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: -100 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: 1 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 1 }]
        await inst.execute({ customer_id: 9876, products: object })
    })

    test("3", async () => {
        let object: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: -5.48 }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", quantity: 1 }]
        await inst.execute({ customer_id: "bc23a9d531064583ace8f67dad60f6bb", products: object })
    })

    test("4", async () => {
        let object: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: 0 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 1 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 100 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 100 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 0 }]
        await inst.execute({ customer_id: 12345, products: object })
    })

    test("5", async () => {
        await inst.execute({ customer_id: "", products: [] })
    })
})
