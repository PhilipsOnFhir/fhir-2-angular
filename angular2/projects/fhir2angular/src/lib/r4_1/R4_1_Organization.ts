import { R4_1_Address } from './R4_1_Address'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Organization_Contact } from './R4_1_Organization_Contact'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Organization      extends R4_1_DomainResource
{

   static def : string = 'Organization';
   identifier : R4_1_Identifier [];
   active : boolean ;
   type : R4_1_CodeableConcept [];
   name : string ;
   alias : string [];
   telecom : R4_1_ContactPoint [];
   address : R4_1_Address [];
   partOf : R4_1_Reference ;
   contact : R4_1_Organization_Contact [];
   endpoint : R4_1_Reference [];
}
