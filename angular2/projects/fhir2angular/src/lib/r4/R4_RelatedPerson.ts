import { R4_Address } from './R4_Address'
import { R4_AdministrativeGenderEnum } from './R4_AdministrativeGenderEnum'
import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedPerson_Communication } from './R4_RelatedPerson_Communication'

export class R4_RelatedPerson      extends R4_DomainResource
{

   static def : string = 'RelatedPerson';
   identifier : R4_Identifier [];
   active : boolean ;
   patient : R4_Reference ;
   relationship : R4_CodeableConcept [];
   name : R4_HumanName [];
   telecom : R4_ContactPoint [];
   gender : R4_AdministrativeGenderEnum ;
   birthDate : string ;
   address : R4_Address [];
   photo : R4_Attachment [];
   period : R4_Period ;
   communication : R4_RelatedPerson_Communication [];
}
