const handlers = require ('./index')

describe ('Endpoints', ()=>{
    describe ('Users', ()=>{
        describe ('get', ()=>{
            it('return to user json', async ()=>{
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1})
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send:  jest.fn()
                }
                await handlers({ axios }).get({}, res)
                expect(res.status.mock.calls).toEqual([[200]])
                expect(res.send.mock.calls).toEqual([[1]])
            })
        }
        )

        describe ('post', ()=>{
            it ('should create a new user', async ()=>{
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1})
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send:  jest.fn()
                }

                const req = {
                    body: 'body'
                }
                await handlers({ axios }).post(req, res)
                expect(res.status.mock.calls).toEqual([[201]])
                expect(res.send.mock.calls).toEqual([[1]])
                expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users', 'body']])
            }
            )
        }
        )
       /*  describe ('put', ()=>{
            it ('should update a user', async ()=>{
                const {data} = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
                    name: 'test',
                    username: 'test',
                    email: ''
                }
                )
                expect(data).toHaveProperty('id')
            }
            )
        }
        )
        describe ('delete', ()=>{
            it ('should delete a user', async ()=>{
                const {data} = await axios.delete('https://jsonplaceholder.typicode.com/users/1')
                expect(data).toHaveProperty('id')
            }
            )
        }
        ) */
    }
    )
})