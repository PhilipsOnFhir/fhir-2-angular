import { STU3_Address } from './STU3_Address'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Organization_Contact } from './STU3_Organization_Contact'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Organization      extends STU3_DomainResource
{

   static def : string = 'Organization';
   identifier : STU3_Identifier [];
   active : boolean ;
   type : STU3_CodeableConcept [];
   name : string ;
   alias : string [];
   telecom : STU3_ContactPoint [];
   address : STU3_Address [];
   partOf : STU3_Reference ;
   contact : STU3_Organization_Contact [];
   endpoint : STU3_Reference [];
}
