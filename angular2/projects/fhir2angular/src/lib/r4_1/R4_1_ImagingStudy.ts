import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ImagingStudyStatusEnum } from './R4_1_ImagingStudyStatusEnum'
import { R4_1_ImagingStudy_Series } from './R4_1_ImagingStudy_Series'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImagingStudy      extends R4_1_DomainResource
{

   static def : string = 'ImagingStudy';
   identifier : R4_1_Identifier [];
   status : R4_1_ImagingStudyStatusEnum ;
   modality : R4_1_Coding [];
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   started : string ;
   basedOn : R4_1_Reference [];
   referrer : R4_1_Reference ;
   interpreter : R4_1_Reference [];
   endpoint : R4_1_Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedureReference : R4_1_Reference ;
   procedureCode : R4_1_CodeableConcept [];
   location : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   note : R4_1_Annotation [];
   description : string ;
   series : R4_1_ImagingStudy_Series [];
}
