import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ImagingStudy_Series } from './STU3_ImagingStudy_Series'
import { STU3_InstanceAvailabilityEnum } from './STU3_InstanceAvailabilityEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImagingStudy      extends STU3_DomainResource
{

   static def : string = 'ImagingStudy';
   uid : string ;
   accession : STU3_Identifier ;
   identifier : STU3_Identifier [];
   availability : STU3_InstanceAvailabilityEnum ;
   modalityList : STU3_Coding [];
   patient : STU3_Reference ;
   context : STU3_Reference ;
   started : string ;
   basedOn : STU3_Reference [];
   referrer : STU3_Reference ;
   interpreter : STU3_Reference [];
   endpoint : STU3_Reference [];
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedureReference : STU3_Reference [];
   procedureCode : STU3_CodeableConcept [];
   reason : STU3_CodeableConcept ;
   description : string ;
   series : STU3_ImagingStudy_Series [];
}
