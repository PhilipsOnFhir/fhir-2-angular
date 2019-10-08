import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MolecularSequence_Repository      extends R4_1_BackboneElement
{

   static def : string = 'MolecularSequence_Repository';
   type : string ;
   url : string ;
   name : string ;
   datasetId : string ;
   variantsetId : string ;
   readsetId : string ;
}
