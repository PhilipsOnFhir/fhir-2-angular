import { R4_Address } from './R4_Address'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Organization_Contact } from './R4_Organization_Contact'
import { R4_Reference } from './R4_Reference'

export class R4_Organization      extends R4_DomainResource
{

   static def : string = 'Organization';
   identifier : R4_Identifier [];
   active : boolean ;
   type : R4_CodeableConcept [];
   name : string ;
   alias : string [];
   telecom : R4_ContactPoint [];
   address : R4_Address [];
   partOf : R4_Reference ;
   contact : R4_Organization_Contact [];
   endpoint : R4_Reference [];
}
