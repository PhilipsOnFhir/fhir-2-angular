import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MarketingStatus } from './R5_MarketingStatus'
import { R5_MedicinalProductPackaged_BatchIdentifier } from './R5_MedicinalProductPackaged_BatchIdentifier'
import { R5_MedicinalProductPackaged_PackageItem } from './R5_MedicinalProductPackaged_PackageItem'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductPackaged      extends R5_DomainResource
{

   static def : string = 'MedicinalProductPackaged';
   identifier : R5_Identifier [];
   subject : R5_Reference [];
   description : string ;
   legalStatusOfSupply : R5_CodeableConcept ;
   marketingStatus : R5_MarketingStatus [];
   marketingAuthorization : R5_Reference ;
   manufacturer : R5_Reference [];
   batchIdentifier : R5_MedicinalProductPackaged_BatchIdentifier [];
   packageItem : R5_MedicinalProductPackaged_PackageItem [];
}
