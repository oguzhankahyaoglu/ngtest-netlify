/**
 * Squidex API for okahyaoglunet App
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InlineResponse200 } from '../model/inlineResponse200';
import { ProjectContentDto } from '../model/projectContentDto';
import { ProjectDto } from '../model/projectDto';
import { Configuration } from '../configuration';
export declare class ProjectService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Archive a Project content.
     *
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    archiveProjectContent(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    archiveProjectContent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    archiveProjectContent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Create a Project content.
     *
     * @param data The data of the content to be created or updated.                Please note that each field is an object with one entry per language.   If the field is not localizable you must use iv (Invariant Language) as a key.  When you change the field to be localizable the value will become the value for the master language, depending what the master language is at this point of time.    Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @param publish Set to true to autopublish content.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createProjectContent(data: ProjectDto, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<ProjectContentDto>;
    createProjectContent(data: ProjectDto, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProjectContentDto>>;
    createProjectContent(data: ProjectDto, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProjectContentDto>>;
    /**
     * Delete a Project content.
     *
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteProjectContent(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteProjectContent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteProjectContent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Get a Project content.
     *
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getProjectContent(id: string, observe?: 'body', reportProgress?: boolean): Observable<ProjectContentDto>;
    getProjectContent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProjectContentDto>>;
    getProjectContent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProjectContentDto>>;
    /**
     * Patch a Project content.
     *
     * @param data The data of the content to be created or updated.                Please note that each field is an object with one entry per language.   If the field is not localizable you must use iv (Invariant Language) as a key.  When you change the field to be localizable the value will become the value for the master language, depending what the master language is at this point of time.    Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    pathProjectContent(data: ProjectDto, id: string, observe?: 'body', reportProgress?: boolean): Observable<ProjectDto>;
    pathProjectContent(data: ProjectDto, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProjectDto>>;
    pathProjectContent(data: ProjectDto, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProjectDto>>;
    /**
     * Publish a Project content.
     *
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    publishProjectContent(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    publishProjectContent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    publishProjectContent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Queries Project contents.
     * The squidex API the OData url convention to query data.     We support the following query options.    * **$top**: The $top query option requests the number of items in the queried collection to be included in the result. The default value is 20 and the maximum allowed value is 200.  * **$skip**: The $skip query option requests the number of items in the queried collection that are to be skipped and not included in the result. Use it together with $top to read the all your data page by page.   * **$search**: The $search query option allows clients to request entities matching a free-text search expression. We add the data of all fields for all languages to a single field in the database and use this combined field to implement the full text search.  * **$filter**: The $filter query option allows clients to filter a collection of resources that are addressed by a request URL.  * **$orderby**: The $orderby query option allows clients to request resources in a particular order.    Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @param top Optional number of contents to take (Default: 20).
     * @param skip Optional number of contents to skip.
     * @param filter Optional OData filter.
     * @param search Optional OData full text search.
     * @param orderby Optional OData order definition.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    queryProjectContents(top?: number, skip?: number, filter?: string, search?: string, orderby?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    queryProjectContents(top?: number, skip?: number, filter?: string, search?: string, orderby?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    queryProjectContents(top?: number, skip?: number, filter?: string, search?: string, orderby?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    /**
     * Restore a Project content.
     *
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    restoreProjectContent(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    restoreProjectContent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    restoreProjectContent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Unpublish a Project content.
     *
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    unpublishProjectContent(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    unpublishProjectContent(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    unpublishProjectContent(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Update a Project content.
     *
     * @param data The data of the content to be created or updated.                Please note that each field is an object with one entry per language.   If the field is not localizable you must use iv (Invariant Language) as a key.  When you change the field to be localizable the value will become the value for the master language, depending what the master language is at this point of time.    Read more about it at: https://docs.squidex.io/04-guides/02-api.html
     * @param id The id of the Project content (GUID).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateProjectContent(data: ProjectDto, id: string, observe?: 'body', reportProgress?: boolean): Observable<ProjectDto>;
    updateProjectContent(data: ProjectDto, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProjectDto>>;
    updateProjectContent(data: ProjectDto, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProjectDto>>;
}
