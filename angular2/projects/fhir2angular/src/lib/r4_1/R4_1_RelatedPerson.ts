import { R4_1_Address } from './R4_1_Address'
import { R4_1_AdministrativeGenderEnum } from './R4_1_AdministrativeGenderEnum'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedPerson_Communication } from './R4_1_RelatedPerson_Communication'

export class R4_1_RelatedPerson      extends R4_1_DomainResource
{

   static def : string = 'RelatedPerson';
   identifier : R4_1_Identifier [];
   active : boolean ;
   patient : R4_1_Reference ;
   relationship : R4_1_CodeableConcept [];
   name : R4_1_HumanName [];
   telecom : R4_1_ContactPoint [];
   gender : R4_1_AdministrativeGenderEnum ;
   birthDate : string ;
   address : R4_1_Address [];
   photo : R4_1_Attachment [];
   period : R4_1_Period ;
   communication : R4_1_RelatedPerson_Communication [];
}
