import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ImagingStudyStatusEnum } from './R5_ImagingStudyStatusEnum'
import { R5_ImagingStudy_Series } from './R5_ImagingStudy_Series'
import { R5_Reference } from './R5_Reference'

export class R5_ImagingStudy      extends R5_DomainResource
{

   static def : string = 'ImagingStudy';
   identifier : R5_Identifier [];
   status : R5_ImagingStudyStatusEnum ;
   modality : R5_Coding [];
   subject : R5_Reference ;
   encounter : R5_Reference ;
   started : string ;
   basedOn : R5_Reference [];
   referrer : R5_Reference ;
   interpreter : R5_Reference [];
   endpoint : R5_Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedureReference : R5_Reference ;
   procedureCode : R5_CodeableConcept [];
   location : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   note : R5_Annotation [];
   description : string ;
   series : R5_ImagingStudy_Series [];
}
