import { BASE_URL } from '../environment'

const urljoin = require('url-join')

export class AbstractAPI {
    constructor() {
        this._baseUrl = this.baseUrl
        this._endpoint = this.endpoint
        this._method = 'GET'
        this._data = undefined
    }

    get baseUrl() {
        return BASE_URL
    }

    get endpoint() {
        return ''
    }

    static use() {
        return new this()
    }

    withPath(path) {
        this._endpoint = path
        return this
    }

    get config() {
        return {
            method: this._method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this._data)
        }
    }

    async request() {
        const url = `${urljoin(this._baseUrl, this._endpoint)}/`
        let response = await fetch(url, this.config)
        response = await response.json()
        return response
    }

    async create(data) {
        this._method = 'POST'
        this._data = data
        const response = await this.request()
        return response
    }

    async getMany() {
        const response = await this.request()
        return response
    }

    async getOne(id) {
        this._endpoint = urljoin(this._endpoint, id)
        const response = await this.request()
        return response
    }

    async updateOne(id, patch) {
        this._method = 'PUT'
        this._endpoint = urljoin(this._endpoint, id)
        this._data = patch
        const response = await this.request()
        return response
    }

    async deleteOne(id) {
        this._method = 'DELETE'
        this._endpoint = urljoin(this._endpoint, id)
        const response = await this.request()
        return response
    }
}