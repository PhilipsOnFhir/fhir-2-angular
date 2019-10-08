import { R5_Address } from './R5_Address'
import { R5_AdministrativeGenderEnum } from './R5_AdministrativeGenderEnum'
import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HumanName } from './R5_HumanName'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedPerson_Communication } from './R5_RelatedPerson_Communication'

export class R5_RelatedPerson      extends R5_DomainResource
{

   static def : string = 'RelatedPerson';
   identifier : R5_Identifier [];
   active : boolean ;
   patient : R5_Reference ;
   relationship : R5_CodeableConcept [];
   name : R5_HumanName [];
   telecom : R5_ContactPoint [];
   gender : R5_AdministrativeGenderEnum ;
   birthDate : string ;
   address : R5_Address [];
   photo : R5_Attachment [];
   period : R5_Period ;
   communication : R5_RelatedPerson_Communication [];
}
