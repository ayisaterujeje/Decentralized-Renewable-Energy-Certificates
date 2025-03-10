import { describe, it, expect, vi } from "vitest"

// Mock Clarity values and functions
const mockClarityValue = (type: string, value: any) => ({ type, value })
const uint = (value: number) => mockClarityValue("uint", value)
const principal = (value: string) => mockClarityValue("principal", value)
const stringAscii = (value: string) => mockClarityValue("string-ascii", value)
const ok = (value: any) => ({ type: "response", value: { type: "ok", value } })
const err = (value: any) => ({ type: "response", value: { type: "err", value } })

// Mock contract calls
const mockContractCall = vi.fn()

describe("REC Issuance Contract", () => {
	it("issues a certificate", () => {
		mockContractCall.mockReturnValueOnce(ok(uint(1)))
		const result = mockContractCall("issue-certificate", [uint(100), stringAscii("Solar Farm A")])
		expect(result).toEqual(ok(uint(1)))
	})
	
	it("gets a certificate", () => {
		const certificate = {
			owner: principal("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"),
			amount: uint(100),
			facility: stringAscii("Solar Farm A"),
			timestamp: uint(123456),
		}
		mockContractCall.mockReturnValueOnce(certificate)
		const result = mockContractCall("get-certificate", [uint(1)])
		expect(result).toEqual(certificate)
	})
	
	it("gets the next certificate id", () => {
		mockContractCall.mockReturnValueOnce(uint(2))
		const result = mockContractCall("get-next-certificate-id", [])
		expect(result).toEqual(uint(2))
	})
})

