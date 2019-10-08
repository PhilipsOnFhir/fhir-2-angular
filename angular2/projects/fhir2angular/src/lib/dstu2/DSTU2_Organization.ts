import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Organization_Contact } from './DSTU2_Organization_Contact'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Organization      extends DSTU2_DomainResource
{

   static def : string = 'Organization';
   identifier : DSTU2_Identifier [];
   active : boolean ;
   type : DSTU2_CodeableConcept ;
   name : string ;
   telecom : DSTU2_ContactPoint [];
   address : DSTU2_Address [];
   partOf : DSTU2_Reference ;
   contact : DSTU2_Organization_Contact [];
}
