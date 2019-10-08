import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HumanName } from './DSTU2_HumanName'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Practitioner_PractitionerRole } from './DSTU2_Practitioner_PractitionerRole'
import { DSTU2_Practitioner_Qualification } from './DSTU2_Practitioner_Qualification'

export class DSTU2_Practitioner      extends DSTU2_DomainResource
{

   static def : string = 'Practitioner';
   identifier : DSTU2_Identifier [];
   active : boolean ;
   name : DSTU2_HumanName ;
   telecom : DSTU2_ContactPoint [];
   address : DSTU2_Address [];
   gender : string ;
   birthDate : string ;
   photo : DSTU2_Attachment [];
   practitionerRole : DSTU2_Practitioner_PractitionerRole [];
   qualification : DSTU2_Practitioner_Qualification [];
   communication : DSTU2_CodeableConcept [];
}
