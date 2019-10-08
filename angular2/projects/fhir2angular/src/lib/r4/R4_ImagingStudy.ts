import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ImagingStudyStatusEnum } from './R4_ImagingStudyStatusEnum'
import { R4_ImagingStudy_Series } from './R4_ImagingStudy_Series'
import { R4_Reference } from './R4_Reference'

export class R4_ImagingStudy      extends R4_DomainResource
{

   static def : string = 'ImagingStudy';
   identifier : R4_Identifier [];
   status : R4_ImagingStudyStatusEnum ;
   modality : R4_Coding [];
   subject : R4_Reference ;
   encounter : R4_Reference ;
   started : string ;
   basedOn : R4_Reference [];
   referrer : R4_Reference ;
   interpreter : R4_Reference [];
   endpoint : R4_Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedureReference : R4_Reference ;
   procedureCode : R4_CodeableConcept [];
   location : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   note : R4_Annotation [];
   description : string ;
   series : R4_ImagingStudy_Series [];
}
