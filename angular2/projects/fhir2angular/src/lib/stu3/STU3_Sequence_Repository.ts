import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Sequence_Repository      extends STU3_BackboneElement
{

   static def : string = 'Sequence_Repository';
   type : string ;
   url : string ;
   name : string ;
   datasetId : string ;
   variantsetId : string ;
   readsetId : string ;
}
