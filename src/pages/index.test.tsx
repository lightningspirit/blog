import puppeteer, { Browser, Page } from "puppeteer"

describe("Integration", () => {
  const client: {
    browser: Browser | null
    page: Page | null
  } = {
    browser: null,
    page: null,
  }

  beforeAll(async () => {
    client.browser = await puppeteer.launch()
    client.page = await client.browser.newPage()
  })

  afterAll(async () => {
    await client.browser!!.close()
  })

  describe("/", () => {
    beforeAll(async () => {
      await client.page!!.goto("file://../public")
    })

    it('should be titled "Codacy"', async () => {
      await expect(client.page!!.title()).resolves.toBe("Codacy")
    })
  })
})
