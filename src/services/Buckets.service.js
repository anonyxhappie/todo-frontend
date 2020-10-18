import { AbstractAPI } from './_base'

export class BucketsService extends AbstractAPI {
    get endpoint() {
        return 'buckets'
    }
}
