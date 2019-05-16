# CHANGELOG

## 1.2.1 - 2018-5-16
* Removed unnecessary file from being published to npm.

## 1.2.0 - 2018-5-16
* Added units 
* Added categories -> `spaceInvoices.categories[create, edit, delete, list]`
* Added documentCategories -> `spaceInvoices.documentCategories[create, edit, delete]`
* Added count method to basic functions -> `spaceInvoices.categories[create, edit, delete, list, count]`
* Dependencies security updates

## 1.1.0 - 2018-12-20

* Added a testing option allowing connection to the test api
* Fixed a typo in 422 error
* Added option for creating organization default
* Added option for updating organization default

## 1.0.0 - 2018-11-07

* Version bump to 1.0.0
* Added getById function to organizations -> `spaceInvoices.organizations.getById(orgId)`
* Changed request encoding to default to undefined instead of null
* Added function for listing all countries -> `spaceInvoices.countries.list()`
* Added upload function to requestService
* Added option for uploading Organization images -> `spaceInvoices.organizations.uploadImage(orgId, imgPath, type)`
* Added option for listing document payments -> `spaceInvoices.payments.listDocumentPayments(documentId)`
* Added option for listing document recurrences -> `spaceInvoices.recurrences.listDocumentRecurrences(documentId)`

## 0.0.1 - 2018-02-08
* Initial release

