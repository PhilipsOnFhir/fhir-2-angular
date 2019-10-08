import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ImagingStudy_Series } from './DSTU2_ImagingStudy_Series'
import { DSTU2_InstanceAvailabilityEnum } from './DSTU2_InstanceAvailabilityEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImagingStudy      extends DSTU2_DomainResource
{

   static def : string = 'ImagingStudy';
   started : string ;
   patient : DSTU2_Reference ;
   uid : string ;
   accession : DSTU2_Identifier ;
   identifier : DSTU2_Identifier [];
   order : DSTU2_Reference [];
   modalityList : DSTU2_Coding [];
   referrer : DSTU2_Reference ;
   availability : DSTU2_InstanceAvailabilityEnum ;
   url : string ;
   numberOfSeries : string ;
   numberOfInstances : string ;
   procedure : DSTU2_Reference [];
   interpreter : DSTU2_Reference ;
   description : string ;
   series : DSTU2_ImagingStudy_Series [];
}
