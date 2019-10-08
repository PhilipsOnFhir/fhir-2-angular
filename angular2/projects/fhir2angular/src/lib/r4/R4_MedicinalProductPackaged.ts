import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MarketingStatus } from './R4_MarketingStatus'
import { R4_MedicinalProductPackaged_BatchIdentifier } from './R4_MedicinalProductPackaged_BatchIdentifier'
import { R4_MedicinalProductPackaged_PackageItem } from './R4_MedicinalProductPackaged_PackageItem'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductPackaged      extends R4_DomainResource
{

   static def : string = 'MedicinalProductPackaged';
   identifier : R4_Identifier [];
   subject : R4_Reference [];
   description : string ;
   legalStatusOfSupply : R4_CodeableConcept ;
   marketingStatus : R4_MarketingStatus [];
   marketingAuthorization : R4_Reference ;
   manufacturer : R4_Reference [];
   batchIdentifier : R4_MedicinalProductPackaged_BatchIdentifier [];
   packageItem : R4_MedicinalProductPackaged_PackageItem [];
}
