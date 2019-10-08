import { R5_Address } from './R5_Address'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Organization_Contact } from './R5_Organization_Contact'
import { R5_Reference } from './R5_Reference'

export class R5_Organization      extends R5_DomainResource
{

   static def : string = 'Organization';
   identifier : R5_Identifier [];
   active : boolean ;
   type : R5_CodeableConcept [];
   name : string ;
   alias : string [];
   telecom : R5_ContactPoint [];
   address : R5_Address [];
   partOf : R5_Reference ;
   contact : R5_Organization_Contact [];
   endpoint : R5_Reference [];
}
