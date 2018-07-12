import { MyAppRoutingModule } from './my-app-routing.module';

describe('MyAppRoutingModule', () => {
  let myAppRoutingModule: MyAppRoutingModule;

  beforeEach(() => {
    myAppRoutingModule = new MyAppRoutingModule();
  });

  it('should create an instance', () => {
    expect(myAppRoutingModule).toBeTruthy();
  });
});
