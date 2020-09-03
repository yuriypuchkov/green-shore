import { CommentsService } from "./comments.service"

describe('PostService', ()=>{
  let service: CommentsService;
  let http;

  beforeEach(() => {
    http = jasmine.createSpyObj(['get']);
    service = new CommentsService(http);
  });

  it('should call correct url', () => {
    const expectedApiUrl = `http://jsonplaceholder.typicode.com/comments`;
    service.getAllComments();

    expect(http.get).toHaveBeenCalledWith(expectedApiUrl);
  });
});
