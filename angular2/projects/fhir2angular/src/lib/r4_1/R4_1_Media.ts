import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EventStatusEnum } from './R4_1_EventStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Media      extends R4_1_DomainResource
{

   static def : string = 'Media';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_EventStatusEnum ;
   type : R4_1_CodeableConcept ;
   modality : R4_1_CodeableConcept ;
   view : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   createdDateTime : string ;
   createdPeriod : R4_1_Period ;
   issued : string ;
   operator : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   bodySite : R4_1_CodeableConcept ;
   deviceName : string ;
   device : R4_1_Reference ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : R4_1_Attachment ;
   note : R4_1_Annotation [];
}
