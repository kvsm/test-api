# TestApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDescribedThing**](DefaultApi.md#createDescribedThing) | **POST** /describedThings | Create a DescribedThing
[**createThing**](DefaultApi.md#createThing) | **POST** /things | Create a Thing
[**deleteDescribedThing**](DefaultApi.md#deleteDescribedThing) | **DELETE** /describedThings/{describedThingId} | Delete a DescribedThing
[**deleteThing**](DefaultApi.md#deleteThing) | **DELETE** /things/{thingId} | Delete a Thing
[**getDescribedThing**](DefaultApi.md#getDescribedThing) | **GET** /describedThings/{describedThingId} | Get a DescribedThing
[**getDescribedThings**](DefaultApi.md#getDescribedThings) | **GET** /describedThings | List All DescribedThings
[**getThing**](DefaultApi.md#getThing) | **GET** /things/{thingId} | Get a Thing
[**getThings**](DefaultApi.md#getThings) | **GET** /things | List All Things
[**updateDescribedThing**](DefaultApi.md#updateDescribedThing) | **PUT** /describedThings/{describedThingId} | Update a DescribedThing
[**updateThing**](DefaultApi.md#updateThing) | **PUT** /things/{thingId} | Update a Thing


<a name="createDescribedThing"></a>
# **createDescribedThing**
> createDescribedThing(describedThing)

Create a DescribedThing

Creates a new instance of a &#x60;DescribedThing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let describedThing = new TestApi.DescribedThing(); // DescribedThing | A new `DescribedThing` to be created.
apiInstance.createDescribedThing(describedThing).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **describedThing** | [**DescribedThing**](DescribedThing.md)| A new &#x60;DescribedThing&#x60; to be created. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createThing"></a>
# **createThing**
> createThing(thing)

Create a Thing

Creates a new instance of a &#x60;Thing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let thing = new TestApi.Thing(); // Thing | A new `Thing` to be created.
apiInstance.createThing(thing).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing** | [**Thing**](Thing.md)| A new &#x60;Thing&#x60; to be created. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteDescribedThing"></a>
# **deleteDescribedThing**
> deleteDescribedThing(describedThingId)

Delete a DescribedThing

Deletes an existing &#x60;DescribedThing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let describedThingId = "describedThingId_example"; // String | A unique identifier for a `DescribedThing`.
apiInstance.deleteDescribedThing(describedThingId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **describedThingId** | **String**| A unique identifier for a &#x60;DescribedThing&#x60;. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteThing"></a>
# **deleteThing**
> deleteThing(thingId)

Delete a Thing

Deletes an existing &#x60;Thing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let thingId = "thingId_example"; // String | A unique identifier for a `Thing`.
apiInstance.deleteThing(thingId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thingId** | **String**| A unique identifier for a &#x60;Thing&#x60;. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDescribedThing"></a>
# **getDescribedThing**
> DescribedThing getDescribedThing(describedThingId)

Get a DescribedThing

Gets the details of a single instance of a &#x60;DescribedThing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let describedThingId = "describedThingId_example"; // String | A unique identifier for a `DescribedThing`.
apiInstance.getDescribedThing(describedThingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **describedThingId** | **String**| A unique identifier for a &#x60;DescribedThing&#x60;. | 

### Return type

[**DescribedThing**](DescribedThing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDescribedThings"></a>
# **getDescribedThings**
> [DescribedThing] getDescribedThings()

List All DescribedThings

Gets a list of all &#x60;DescribedThing&#x60; entities.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
apiInstance.getDescribedThings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DescribedThing]**](DescribedThing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThing"></a>
# **getThing**
> Thing getThing(thingId)

Get a Thing

Gets the details of a single instance of a &#x60;Thing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let thingId = "thingId_example"; // String | A unique identifier for a `Thing`.
apiInstance.getThing(thingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thingId** | **String**| A unique identifier for a &#x60;Thing&#x60;. | 

### Return type

[**Thing**](Thing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThings"></a>
# **getThings**
> [Thing] getThings()

List All Things

Gets a list of all &#x60;Thing&#x60; entities.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
apiInstance.getThings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Thing]**](Thing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDescribedThing"></a>
# **updateDescribedThing**
> updateDescribedThing(describedThingId, describedThing)

Update a DescribedThing

Updates an existing &#x60;DescribedThing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let describedThingId = "describedThingId_example"; // String | A unique identifier for a `DescribedThing`.
let describedThing = new TestApi.DescribedThing(); // DescribedThing | Updated `DescribedThing` information.
apiInstance.updateDescribedThing(describedThingId, describedThing).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **describedThingId** | **String**| A unique identifier for a &#x60;DescribedThing&#x60;. | 
 **describedThing** | [**DescribedThing**](DescribedThing.md)| Updated &#x60;DescribedThing&#x60; information. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateThing"></a>
# **updateThing**
> updateThing(thingId, thing)

Update a Thing

Updates an existing &#x60;Thing&#x60;.

### Example
```javascript
import TestApi from 'test-api';

let apiInstance = new TestApi.DefaultApi();
let thingId = "thingId_example"; // String | A unique identifier for a `Thing`.
let thing = new TestApi.Thing(); // Thing | Updated `Thing` information.
apiInstance.updateThing(thingId, thing).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thingId** | **String**| A unique identifier for a &#x60;Thing&#x60;. | 
 **thing** | [**Thing**](Thing.md)| Updated &#x60;Thing&#x60; information. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

