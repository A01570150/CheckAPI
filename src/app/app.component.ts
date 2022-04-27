import { Component } from '@angular/core';
import { BlogPostCard } from './blog-post-card.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: BlogPostCard[] = [ // arreglo estatico modificiar info a mostar
      {
        mainImageUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        tag: 'tag example',
        title: 'Pet API',
        description: 'Lorem ipsum dolor sit amet et et invidunt commodo. Dolore duis dignissim labore dolor elitr eirmod blandit stet amet nihil stet amet erat nisl et. No illum delenit sadipscing diam lorem adipiscing eos stet dolores elit vero diam sed ullamcorper ut esse rebum accusam. Eirmod consetetur dia',
        status: true,
        serviceLevel: 75,
        responseTime: 610, 
  
      },
      {
        mainImageUrl: 'https://images.unsplash.com/photo-1650396693368-1c7239d278ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        tag: 'tag example',
        title: 'API 2',
        description: 'Lorem ipsum dolor sit amet et et invidunt commodo. Dolore duis dignissim labore dolor elitr eirmod blandit stet amet nihil stet amet erat nisl et. No illum delenit sadipscing diam lorem adipiscing eos stet dolores elit vero diam sed ullamcorper ut esse rebum accusam. Eirmod consetetur dia',
        status: false,
        serviceLevel: 20,
        responseTime: 610, 
  
      },
  
      {
        mainImageUrl: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        tag: 'tag example',
        title: 'API 3',
        description: 'Lorem ipsum dolor sit amet et et invidunt commodo. Dolore duis dignissim labore dolor elitr eirmod blandit stet amet nihil stet amet erat nisl et. No illum delenit sadipscing diam lorem adipiscing eos stet dolores elit vero diam sed ullamcorper ut esse rebum accusam. Eirmod consetetur dia',
        status: true,
        serviceLevel: 75,
        responseTime: 610, 
  
      },
  
      {
        mainImageUrl: 'https://images.unsplash.com/photo-1650445332429-75ceee3f3226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        tag: 'tag example',
        title: 'API 4',
        description: 'Lorem ipsum dolor sit amet et et invidunt commodo. Dolore duis dignissim labore dolor elitr eirmod blandit stet amet nihil stet amet erat nisl et. No illum delenit sadipscing diam lorem adipiscing eos stet dolores elit vero diam sed ullamcorper ut esse rebum accusam. Eirmod consetetur dia',
        status: false,
        serviceLevel: 15,
        responseTime: 610, 
  
      },
  
      {
        mainImageUrl: 'https://images.unsplash.com/photo-1650460230786-5d391175b44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        tag: 'tag example',
        title: 'API 5',
        description: 'Lorem ipsum dolor sit amet et et invidunt commodo. Dolore duis dignissim labore dolor elitr eirmod blandit stet amet nihil stet amet erat nisl et. No illum delenit sadipscing diam lorem adipiscing eos stet dolores elit vero diam sed ullamcorper ut esse rebum accusam. Eirmod consetetur dia',
        status: false,
        serviceLevel: 15,
        responseTime: 610, 
  
      },
      
    ]
  title = 'checkAPI';
}
