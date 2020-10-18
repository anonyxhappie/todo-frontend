import { AbstractAPI } from './_base'

export class TodoItemsService extends AbstractAPI {
    get endpoint() {
        return 'todoitem'
    }
}
