import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MolecularSequence_Repository      extends R4_BackboneElement
{

   static def : string = 'MolecularSequence_Repository';
   type : string ;
   url : string ;
   name : string ;
   datasetId : string ;
   variantsetId : string ;
   readsetId : string ;
}
