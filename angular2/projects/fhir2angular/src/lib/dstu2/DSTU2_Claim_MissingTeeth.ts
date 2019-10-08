import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Claim_MissingTeeth      extends DSTU2_BackboneElement
{

   static def : string = 'Claim_MissingTeeth';
   tooth : DSTU2_Coding ;
   reason : DSTU2_Coding ;
   extractionDate : string ;
}
