import { STU3_Annotation } from './STU3_Annotation'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DigitalMediaTypeEnum } from './STU3_DigitalMediaTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Media      extends STU3_DomainResource
{

   static def : string = 'Media';
   identifier : STU3_Identifier [];
   basedOn : STU3_Reference [];
   type : STU3_DigitalMediaTypeEnum ;
   subtype : STU3_CodeableConcept ;
   view : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   operator : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   bodySite : STU3_CodeableConcept ;
   device : STU3_Reference ;
   height : string ;
   width : string ;
   frames : string ;
   duration : string ;
   content : STU3_Attachment ;
   note : STU3_Annotation [];
}
