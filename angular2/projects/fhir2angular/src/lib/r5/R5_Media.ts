import { R5_Annotation } from './R5_Annotation'
import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EventStatusEnum } from './R5_EventStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Media      extends R5_DomainResource
{

   static def : string = 'Media';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_EventStatusEnum ;
   type : R5_CodeableConcept ;
   modality : R5_CodeableConcept ;
   view : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   createdDateTime : string ;
   createdPeriod : R5_Period ;
   issued : string ;
   operator : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   bodySite : R5_CodeableConcept ;
   deviceName : string ;
   device : R5_Reference ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : R5_Attachment ;
   note : R5_Annotation [];
}
