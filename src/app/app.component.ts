import { Component } from '@angular/core';
import { HelloRequest } from 'project/proto/v1/hello_pb';
import { HelloServicePromiseClient } from 'project/proto/v1/hello_grpc_web_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

  ngOnInit(): void {
    const serviceUrl = 'http://localhost:8083';
    const client: HelloServicePromiseClient = new HelloServicePromiseClient(serviceUrl)

    const request = new HelloRequest()
    request.setName('123')

    client.sayHello(request).then((err) => {
      console.error('error requesting graph: %o', err);
    });
  }
}
