import { TestBed, inject } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';

import { HttpModule, Response, ResponseOptions, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('DashboardService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                DashboardService,
                {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions
            ]
        })
    });

    describe('getNews()', () => {
        it('should return an Observable Array',
            inject([DashboardService, MockBackend], (dashboardService, mockBackend) => {

                const mockResponse = {
                    data: [
                        { _id: 0, title: 'News 0', body: 'Test', likes: 1 },
                        { _id: 1, title: 'News 1', body: 'Test', likes: 1 },
                        { _id: 2, title: 'News 2', body: 'Test', likes: 1 },
                        { _id: 3, title: 'News 3', body: 'Test', likes: 1 }
                    ]
                };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                dashboardService.getNews().subscribe((news) => {
                    expect(news.data.length).toBe(4);
                })
            })
        )
    })
});
