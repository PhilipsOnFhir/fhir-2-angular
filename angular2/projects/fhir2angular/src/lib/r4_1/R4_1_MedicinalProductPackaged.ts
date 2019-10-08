import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MarketingStatus } from './R4_1_MarketingStatus'
import { R4_1_MedicinalProductPackaged_BatchIdentifier } from './R4_1_MedicinalProductPackaged_BatchIdentifier'
import { R4_1_MedicinalProductPackaged_PackageItem } from './R4_1_MedicinalProductPackaged_PackageItem'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductPackaged      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductPackaged';
   identifier : R4_1_Identifier [];
   subject : R4_1_Reference [];
   description : string ;
   legalStatusOfSupply : R4_1_CodeableConcept ;
   marketingStatus : R4_1_MarketingStatus [];
   marketingAuthorization : R4_1_Reference ;
   manufacturer : R4_1_Reference [];
   batchIdentifier : R4_1_MedicinalProductPackaged_BatchIdentifier [];
   packageItem : R4_1_MedicinalProductPackaged_PackageItem [];
}
