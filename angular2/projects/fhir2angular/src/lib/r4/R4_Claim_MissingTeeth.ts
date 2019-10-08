import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Claim_MissingTeeth      extends R4_BackboneElement
{

   static def : string = 'Claim_MissingTeeth';
   tooth : R4_Coding ;
   reason : R4_Coding ;
   extractionDate : string ;
}
