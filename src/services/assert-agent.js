import { assertEquals, filter } from 'ferrum'

const records = [
    { name: 'odi', age: 33, job: 'engineer' },
    { name: 'doldol', age: 31, job: 'developer' },
    { name: 'arnold', age: 28, job: 'developer' },
    { name: 'eva', age: 36, job: 'designer' },
]

assertEquals(
    [...filter(records, i => i.job === 'developer')].length,
    2,
)
