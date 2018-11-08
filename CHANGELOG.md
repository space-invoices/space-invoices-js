# CHANGELOG

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

