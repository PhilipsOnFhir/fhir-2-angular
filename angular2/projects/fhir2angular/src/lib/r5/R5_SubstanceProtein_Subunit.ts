import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'

export class R5_SubstanceProtein_Subunit      extends R5_BackboneElement
{

   static def : string = 'SubstanceProtein_Subunit';
   subunit : string ;
   sequence : string ;
   length : string ;
   sequenceAttachment : R5_Attachment ;
   nTerminalModificationId : R5_Identifier ;
   nTerminalModification : string ;
   cTerminalModificationId : R5_Identifier ;
   cTerminalModification : string ;
}
