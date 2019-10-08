import { R4_Annotation } from './R4_Annotation'
import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EventStatusEnum } from './R4_EventStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Media      extends R4_DomainResource
{

   static def : string = 'Media';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_EventStatusEnum ;
   type : R4_CodeableConcept ;
   modality : R4_CodeableConcept ;
   view : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   createdDateTime : string ;
   createdPeriod : R4_Period ;
   issued : string ;
   operator : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   bodySite : R4_CodeableConcept ;
   deviceName : string ;
   device : R4_Reference ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : R4_Attachment ;
   note : R4_Annotation [];
}
