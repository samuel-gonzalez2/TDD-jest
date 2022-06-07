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
      describe('put', () => {
          const axios = {
                put: jest.fn().mockResolvedValue({ data: 1})
            }
          it('updates resource', async () => {
              const req = {
                  body: 'body',
                    params: { id: 1 }
                }
                const res = {
                    sendStatus: jest.fn(),

          } 
            await handlers({ axios }).put(req, res)
            expect(axios.put.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/1', 'body']])
            expect(res.sendStatus.mock.calls).toEqual([[204]])
        });
      });
      
        describe('delete', () => {
            const axios = {
                delete: jest.fn().mockResolvedValue({ data: 1})
            }
            it('deletes resource', async () => {
                const req = {
                    params: { id: 1 }
                }
                const res = {
                    sendStatus: jest.fn(),
                }
                await handlers({ axios }).delete(req, res)
                expect(axios.delete.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/1']])
                expect(res.sendStatus.mock.calls).toEqual([[204]])
            })
        })
    }
    )
})