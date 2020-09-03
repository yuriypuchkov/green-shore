import { PostService } from "./post.service"

describe('PostService', ()=>{
  let service: PostService;
  let http;

  beforeEach(() => {
    http = jasmine.createSpyObj(['get']);
    service = new PostService(http);
  });

  it('hould call correct url', () => {
    const expectedApiUrl = `http://jsonplaceholder.typicode.com/posts`;
    service.getAllPosts();

    expect(http.get).toHaveBeenCalledWith(expectedApiUrl);
  });
});
