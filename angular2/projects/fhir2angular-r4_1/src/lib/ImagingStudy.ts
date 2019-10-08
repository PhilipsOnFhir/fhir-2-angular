import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImagingStudyStatusEnum } from './ImagingStudyStatusEnum'
import { ImagingStudy_Procedure } from './ImagingStudy_Procedure'
import { ImagingStudy_Series } from './ImagingStudy_Series'
import { Reference } from './Reference'

export class ImagingStudy      extends DomainResource
{

   static def : string = 'ImagingStudy';
   identifier : Identifier [];
   status : ImagingStudyStatusEnum ;
   modality : Coding [];
   subject : Reference ;
   encounter : Reference ;
   started : string ;
   basedOn : Reference [];
   referrer : Reference ;
   interpreter : Reference [];
   endpoint : Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedure : ImagingStudy_Procedure [];
   location : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   description : string ;
   series : ImagingStudy_Series [];
}
